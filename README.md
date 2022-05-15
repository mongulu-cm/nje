# njɛ̀
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/DimitriTchapmi"><img src="https://avatars.githubusercontent.com/u/15048420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>DimitriTchapmi</b></sub></a><br /><a href="#ideas-DimitriTchapmi" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!