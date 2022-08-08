import React from "react";
import Links from "./style";
import FooterList from "../FooterList";

const FooterLinks = () => {
  return (
    <Links>
      <FooterList
        list={[
          "Seslendirme ve Alt Yazı",
          "Medya Merkezi",
          "Gizlilik",
          "Bize Ulaşın",
        ]}
      />
      <FooterList
        list={["Sesli Betimleme", "Yatırımcı İlişkileri", "Yasal Hükümler"]}
      />
      <FooterList
        list={["Yardım Merkezi", "İş İmkanları", "Çerez Tercihleri"]}
      />
      <FooterList
        list={["Hediye Kartları", "Kullanım Koşulları", "Kurumsal Bilgiler"]}
      />
    </Links>
  );
};

export default FooterLinks;
