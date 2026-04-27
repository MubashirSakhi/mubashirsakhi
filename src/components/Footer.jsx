export default function Footer() {
  return (
    <footer className="py-5 bg-white">
      <div className="max-w-[940px] mx-auto px-6">
        <div className="text-center text-[0.8em]">
          <div className="flex justify-center">
            <a href="https://linkedin.com/in/mubashirsakhi" target="_blank" rel="noopener noreferrer">
              <img
                src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602ff9f271885e6e959eb5ea_linkedin.png"
                height="48"
                width="48"
                alt="LinkedIn"
                className="p-[10px] cursor-pointer"
                loading="lazy"
              />
            </a>
            <a href="https://facebook.com/mubashirsakhi" target="_blank" rel="noopener noreferrer">
              <img
                src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602ff9f21b81f056f7c3a716_facebook.png"
                height="48"
                width="48"
                alt="Facebook"
                className="p-[10px] cursor-pointer"
                loading="lazy"
              />
            </a>
            <a href="https://instagram.com/mubashirsakhi" target="_blank" rel="noopener noreferrer">
              <img
                src="https://uploads-ssl.webflow.com/5fa91a944517518f02a3aeb1/602ff9f2a8a80d4fe54e9911_instagram.png"
                width="48"
                alt="Instagram"
                className="p-[10px] cursor-pointer"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
