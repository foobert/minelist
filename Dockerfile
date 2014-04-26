FROM ubuntu
RUN apt-get update
RUN apt-get install -y git nodejs npm
RUN git clone https://github.com/foobert/minelist.git
RUN bash -c 'cd minelist; npm install'
EXPOSE 3000
CMD ["nodejs", "minelist/app.js"]
