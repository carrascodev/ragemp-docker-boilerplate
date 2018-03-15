FROM ubuntu:xenial

ENV RAGEMP 0.1

# # both and tcp and udp? check it!
EXPOSE 22005
EXPOSE 22005/udp
EXPOSE 22006

WORKDIR /ragemp


RUN apt-get update
RUN apt-get dist-upgrade -y

RUN DEBIAN_FRONTEND=noninteractive apt-get -y dist-upgrade
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install python-software-properties
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install software-properties-common

RUN add-apt-repository ppa:ubuntu-toolchain-r/test && \
    apt-get -y update && \
    apt-get -y install libstdc++6


RUN apt-get install wget -y

RUN apt-get install --yes curl
RUN curl --silent --location https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install --yes nodejs
RUN apt-get install --yes build-essential

# Downloading server
RUN wget -qO- -O ./ragemp-srv.tar.gz https://cdn.rage.mp/lin/ragemp-srv.tar.gz && \
    tar -xzf ragemp-srv.tar.gz -C ./ && \
    mv ./ragemp-srv/* ./ && \
    rm -Rf ./ragemp-srv && \
    rm -Rf ragemp-srv.tar.gz


RUN chmod +x ./server

RUN npm install

ENTRYPOINT [ "npm", "start" ]