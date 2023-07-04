import "./Footer.scss";

const FooterData = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

const Footer = () => {
  return (
    <div className="footer">
      {FooterData.map((d) => (
        <div key={d} className="footer__item">
          {d}
        </div>
      ))}
    </div>
  );
};

export default Footer;
