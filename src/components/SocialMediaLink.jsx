import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaLink = () => {
  return (
    <>
      <a className="mx-3" href="http://www.facebook.com/mcchzb" target="_blank">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a className="mx-3" href="http://www.twitter.com/mcchzb" target="_blank">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </>
  );
};

export default SocialMediaLink;
