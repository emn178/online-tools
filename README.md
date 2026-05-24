# Online Tools
Please go to [Online Tools](https://emn178.github.io/online-tools/)

## Contact
The project's website is located at https://github.com/emn178/online-tools  
Author: emn178@gmail.com

## Deploy with Docker

```shell
wget https://raw.githubusercontent.com/emn178/online-tools/refs/heads/master/Dockerfile
docker build -t online-tools:latest .
docker run -d --name online-tools -p 8000:80 online-tools:latest
#open http://127.0.0.1:8000/online-tools
```
