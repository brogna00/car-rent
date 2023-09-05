import styles from './Footer.module.css';

import instagramLogo from '../../assets/instagram.png'
import linkedinLogo from '../../assets/linkedin.png'
import gitHubLogo from '../../assets/git-hub.png'

import logoHeader from '../../assets/car-rent-logo.svg';



export default function Footer(){
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <div className={styles.logo__name}>
                    <img src={logoHeader} alt="Logo da Empresa" />
                    <h3>Aluga Car</h3>
                </div>
                <p>Rua Cirano, Vila Olímpia,<br /> São Paulo - 04551-040</p>
                <p>0800-1234</p>
            </div>
            <div className={styles.container__list}>
                <h3>O que Oferecemos</h3>

                <a href="#">

                    <p>Carreira</p>

                </a>
                <a href="#">

                    <p>Carros</p>

                </a>
                <a href="#">

                    <p>Funcionalidades</p>

                </a>
                
            </div>

            <div className={styles.container__list}>
                <h3>Recursos</h3>

                <a href="#">

                    <p>Download</p>

                </a>
                <a href="#">

                    <p>Centro de Ajuda</p>

                </a>
                <a href="#">

                    <p>Guias</p>

                </a>
                <a href="#">

                    <p>Network de Parceria</p>

                </a>
                <a href="#">

                    <p>Developer</p>

                </a>                
            </div>

            <div className={styles.container__list}>
                <h3>Sobre Aluguel de Carros</h3>
                <a href="#">

                    <p>Porque nos escolher</p>

                </a>
                <a href="#">

                    <p>Nossa História</p>

                </a>
                <a href="#">

                    <p>Relações com Investidores</p>

                </a>
                <a href="#">

                    <p>Propaganta</p>

                </a>
            </div>
            <div className={styles.followUs}>
                <h3>Siga a gente!</h3>
                <div className={styles.followUs__images}>
                    <a href="https://github.com/brogna00" target='blank'><img src={gitHubLogo} alt="Logo do GitHub" /></a>                  
                    <a href="https://www.linkedin.com/in/joao-victor-brogna-rodrigues/" target='blank'><img src={linkedinLogo} alt="Logo do Linkedin" /></a>
                    <a href="https://www.instagram.com/brogna_/" target='blank'><img src={instagramLogo} alt="Logo do Instagram" /></a>
                </div>
            </div>  
            
        </div>
        
    )

}