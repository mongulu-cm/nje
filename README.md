# njɛ̀
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
> [Baka](https://fr.wikipedia.org/wiki/Baka_(langue_oubanguienne)) language meaning a trace of lightning in the sky

Website of the mongulu collective: https://www.mongulu.cm/ ou http://mongulu.cm/


### Prerequisites
You must have a minimum of competence on the AWS cloud

On the AWS cloud:
* Have registered your domain xxxx.yyy as well as the subdomain www.xxxx.yyy in Route 53
* Have a website bucket www.xxxx.yyy in S3
* A DNS record in Route 53 linking domain xxxx.yyyy to subdomain www.xxxx.yyy  

On your computer: 
* aws-cli
* git 
* A fork of this project


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