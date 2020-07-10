#!/bin/bash
# Absolute path to this script.
# e.g. /home/ubuntu/workspaces/AOI_LinKou_Inference/dockerfile/dockerfile_aoi.sh
SCRIPT=$(readlink -f "$0")

# Absolute path this script is in.
# e.g. /home/ubuntu/workspaces/AOI_LinKou_Inference/dockerfile
SCRIPT_PATH=$(dirname "$SCRIPT")

# Absolute path to the AOI path
# e.g. /home/ubuntu/workspaces/AOI_LinKou_Inference
HOST_PATH=$(dirname "$SCRIPT_PATH")
echo "HOST_PATH      = "$HOST_PATH

# AOI directory name
IFS='/' read -a array <<< "$HOST_PATH"
HOST_DIR_NAME="${array[-1]}"
echo "HOST_DIR_NAME  = "$HOST_DIR_NAME


VERSION=$2
if [ "$2" == "" ]
then
    VERSION="v0"
else
    VERSION=$2
fi
echo "VERSION        = "$VERSION

PROJECT_NAME="vuejs"
DOCKERFILE_NAME="dockerfile_$PROJECT_NAME"
IMAGE_NAME="$PROJECT_NAME:$VERSION"
CONTAINER_NAME=$PROJECT_NAME"_"$VERSION
echo "IMAGE_NAME     = "$IMAGE_NAME
echo "CONTAINER_NAME = "$CONTAINER_NAME

if [ "$1" == "build" ]
then
    export GID=$(id -g)

    echo "docker build --build-arg USER=$USER --build-arg UID=$UID --build-arg GID=$GID -f $DOCKERFILE_NAME -t $IMAGE_NAME ."

    docker build \
        --build-arg USER=$USER \
        --build-arg UID=$UID \
        --build-arg GID=$GID \
        -f $DOCKERFILE_NAME \
        -t $IMAGE_NAME .

elif [ "$1" = "run" ]
then
    echo "docker run --gpus all -it --name $CONTAINER_NAME -v $HOST_PATH:/home/adev/$HOST_DIR_NAME -v /tmp/.X11-unix:/tmp/.X11-unix"
    echo "  --mount type=bind,source=$SCRIPT_PATH/.bashrc,target=/home/$USER/.bashrc $IMAGE_NAME /bin/bash"

    docker run --gpus all -it \
        --name $CONTAINER_NAME \
        -v $HOST_PATH:/home/$USER/$HOST_DIR_NAME \
        -v /tmp/.X11-unix:/tmp/.X11-unix \
        --mount type=bind,source=$SCRIPT_PATH/.bashrc,target=/home/$USER/.bashrc \
        -p 80:8080 \
        $IMAGE_NAME /bin/bash

elif [ "$1" = "exec" ]
then
    echo "docker exec -it $CONTAINER_NAME /bin/bash"
    docker exec -it $CONTAINER_NAME /bin/bash

elif [ "$1" = "start" ]
then
    echo "docker start $CONTAINER_NAME"
    docker start $CONTAINER_NAME

elif [ "$1" = "stop" ]
then
    echo "docker stop $CONTAINER_NAME"
    docker stop $CONTAINER_NAME

elif [ "$1" = "rm" ]
then
    echo "docker rm $CONTAINER_NAME"
    docker rm $CONTAINER_NAME

elif [ "$1" = "rmi" ]
then
    echo "docker rmi $IMAGE_NAME"
    docker rmi $IMAGE_NAME
fi