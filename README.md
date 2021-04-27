# njɛ̀
> Langue [Baka](https://fr.wikipedia.org/wiki/Baka_(langue_oubanguienne)) siginifiant trace d'un éclair dans le ciel

Site web du collectif mongulu: https://www.mongulu.cm/ ou http://mongulu.cm/


### Prérequis
Vous devez avoir un minimum de compétence sur le cloud AWS

Sur le cloud AWS:
* Avoir enregistré votre domaine xxxx.yyy ainsi que le sous-domaine www.xxxx.yyy dans Route 53
* Disposez d'un website bucket www.xxxx.yyy dans S3
* Un enregistrement DNS dans Route 53 reliant le domaine xxxx.yyyy au sous-domaine www.xxxx.yyy  

Sur votre poste : 
* aws-cli
* git 
* Un fork de ce ce projet


### Déploiement

```
  aws s3 cp html/ s3://www.xxxx.yyy --recursive
```    
