# website
Site web du collectif mongulu


### Prérequis
Vous devez avoir un minimum de compétence sur le cloud AWS

Sur le cloud AWS:
* Disposez d'un website bucket www.xxxx.yyy dans S3

Sur votre poste : 
* aws-cli
* git 
* Un fork de ce ce projet


### Déploiement

```
  aws s3 cp html/ s3://www.xxxx.yyy --recursive
```    