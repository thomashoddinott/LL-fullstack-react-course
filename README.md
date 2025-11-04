# Firebase
https://console.firebase.google.com/u/0/project/ll-fullstack-react/authentication/providers and enable email/password

# MongoDB Cloud
Go to https://cloud.mongodb.com/ to get uri for `.env` 

Go here https://cloud.mongodb.com/v2/68fd1ea43d54a64bf8b148f8#/security/network/accessList to add more IP addresses or set temporary unlimited access to get a quick cloud deployment up and running

[Insert Articles](./mongoDB_InsertMany.txt)

# Firebase
Generate new private key > https://console.firebase.google.com/u/0/project/ll-fullstack-react/settings/serviceaccounts/adminsdk

# GCloud CLI
https://docs.cloud.google.com/sdk/docs/install

Find the project: https://console.cloud.google.com/cloud-hub/home;board-filter=type:APP_HUB,key:application_name?project=ll-fullstack-react

And (1) create; (2) link a billing account

🚀 `sudo gcloud app deploy \Desktop/repos/LL-fullstack-react-course/backend/`

Todo fix: 
```
Beginning deployment of service [default]...
╔════════════════════════════════════════════════════════════╗
╠═ Uploading 0 files to Google Cloud Storage                ═╣
╚════════════════════════════════════════════════════════════╝
File upload done.
Updating service [default]...failed.                                     
ERROR: (gcloud.app.deploy) Error Response: [13] An internal error occurred.
```
