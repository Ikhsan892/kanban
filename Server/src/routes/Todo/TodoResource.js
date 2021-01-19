const TodoResource = function (response) {
  return response.map(function (element) {
    return Object.assign({
      id: element.id,
      kegiatan: element.kegiatan,
      status: element.status.nama_status,
      deadline: element.tenggat,
      persentase: element.persentase,
      label: element.label.nama_label,
      kategori: element.kategori.nama_kategori,
    });
  });
};

module.exports = TodoResource;
