import Accordion from "./components/Accordion";

function App() {
  const faqs = [
    {
      question: "Apakah produk ini memiliki jaminan?",
      answer:
        "Ya, kami memberikan jaminan garansi selama 1 tahun untuk produk kami.",
    },
    {
      question: "Berapa lama waktu pengiriman rata-rata?",
      answer:
        "Waktu pengiriman rata-rata adalah 3-5 hari kerja, tergantung lokasi pengiriman.",
    },
    {
      question: "Bagaimana cara mengembalikan barang yang rusak?",
      answer:
        "Jika barang Anda rusak, hubungi layanan pelanggan kami untuk panduan mengenai proses pengembalian dan penggantian.",
    },
  ];
  return (
    <div className="app">
      <h1>This is Accordion!</h1>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
