#!/bin/bash

rm ./react.zip

zip -r react.zip build

scp -i ~/Desktop/anilox_ec2_credentials.pem ~/Desktop/react/react.zip ubuntu@13.250.19.135:~