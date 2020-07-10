for (( i=1; i<=44; i++ )); 
do   
    echo $i
    if [ ${#i} = "1" ]
    then
        git clone -b lesson-$i https://github.com/iamshaunjp/vuejs-playlist.git lesson-0$i
    else
        git clone -b lesson-$i https://github.com/iamshaunjp/vuejs-playlist.git lesson-$i
    fi
done