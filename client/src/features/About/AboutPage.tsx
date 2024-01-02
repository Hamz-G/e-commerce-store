import React from 'react';

const AboutPage: React.FC = () => {
  const rightImageSrc = "/images/logo.png";  // Sağdaki resmin dosya yolu

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ flex: '0 0 70%', textAlign: 'left', paddingRight: '20px' }}>
        <h2 style={{ textAlign: 'left', fontSize: '24px', marginBottom: '10px' }}>Hakkımızda</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Hoş geldiniz! Web sitemizde sizlere en kaliteli ürünleri sunmayı amaçlıyoruz. Müşteri memnuniyeti
          odaklı çalışarak, sizlere güvenilir ve hızlı bir alışveriş deneyimi sunmak için buradayız.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Firmamız 20 yıldan fazla bir süredir sektörde faaliyet göstermektedir. Siz değerli müşterilerimize
          en iyi hizmeti sunabilmek için sürekli olarak kendimizi geliştirmekte ve yeniliklere ayak uydurmaktayız.
        </p>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Eğer herhangi bir sorunuz veya öneriniz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
          Sizden gelen geri bildirimler, hizmet kalitemizi artırmamıza yardımcı olacaktır.
        </p>
      </div>
      <div style={{ flex: '0 0 50%', textAlign: 'center' }}>
        <img src={rightImageSrc} alt="Right Image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default AboutPage;
