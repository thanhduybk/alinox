#!/bin/bash

mvn clean package

scp -i ~/Desktop/anilox_ec2_credentials.pem ~/Desktop/java/alinox-pdf/target/alinox-0.0.1-SNAPSHOT.jar ubuntu@13.250.19.135:~