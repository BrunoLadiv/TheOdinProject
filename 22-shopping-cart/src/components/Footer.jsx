import styled from 'styled-components'
import twitterLogo from '../assets/twitter.svg'
import facebookLogo from '../assets/Facebook.svg'
import youtubeLogo from '../assets/youtube.svg'
import steamLogo from '../assets/steam.svg'
import xboxLogo from '../assets/ms_xbox.svg'
import googlePlayLogo from '../assets/google_play.svg'
import githubLogo from '../assets/github.svg'
import playstationLogo from '../assets/playstation.svg'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SocialsContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 0;
`
const SupportLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 288px;
    margin-bottom: 1.5rem;
    & a{
        color: var(--primary);
        text-decoration: none;
        margin-bottom: 16px;
    }
    & p{
      color: #969292;
    }
`
export default function Footer() {
  return (
    <FooterContainer>
      <SupportLinksContainer>
        <p>support</p>
        <a href="#">Contact us</a>
        <a href="#">FAQ</a>
        <a href="#">Downloads</a>
        <a href="#">Terms of service</a>
      </SupportLinksContainer>

      <SocialsContainer>
        <li>
          <a href="https://www.github.com/">
            <img
              src={githubLogo}
              alt="github"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <img
              src={twitterLogo}
              alt="twitter"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <img
              src={facebookLogo}
              alt="facebook"
            />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/">
            <img
              src={youtubeLogo}
              alt="youtube"
            />
          </a>
        </li>
        <li>
          <a href="https://store.steampowered.com/">
            <img
              src={steamLogo}
              alt="steam"
            />
          </a>
        </li>
        <li>
          <a href="https://www.googleplay.com/">
            <img
              src={googlePlayLogo}
              alt="google play"
            />
          </a>
        </li>
        <li>
          <a href="https://www.xbox.com/">
            <img
              src={xboxLogo}
              alt="xbox"
            />
          </a>
        </li>
        <li>
          <a href="https://www.playstation.com/">
            <img
              src={playstationLogo}
              alt="playstation"
            />
          </a>
        </li>
      </SocialsContainer>

      <h4>
        Powered by{' '}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://rawg.io/"
        >
          R A W G
        </a>{' '}
        api
      </h4>
    </FooterContainer>
  )
}
