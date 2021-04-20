import { useState } from "react";
import { server } from '../server.js';

const ModalCerita = (props) => {
    const [showModal, setShowModal] = useState(true);
    const [nama, setNama] = useState();
    const [nik, setNik] = useState();

    function submit(e) {
        e.preventDefault();

        props.setLoading(true);
        const body = {
            fullname: nama,
            nik
        };

        fetch(server + 'add-detail', {
            method: "PUT",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
            props.setAutentikasi(data);
            setShowModal(false);
            props.setLoading(false);
        });
    }

    return (
        <div>
            <div className={"modal fade" + (showModal && "show d-block")} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e => setShowModal(false)}></button>
                            <h3 className="judul modal-title" id="exampleModalLabel">ATURAN DAN KETENTUAN CERITA</h3>
                        </div>
                        <div className="modal-body">
                        <div class="modal-wrap" >
                        <div class="title">I. Ketentuan Umum Bagi Pengguna :</div>
                        <p class="deskripsi">1. Pengguna dengan ini menyatakan bahwa pengguna adalah subjek hukum yang cakap dan mampu untuk mengikatkan diri dalam perjanjian.
                            <br></br>
                            2. Setiap pengguna sepakat untuk tidak menyebarluaskan berita atau informasi yang tidak benar (hoaks) di dalam platform Linita
                            <br></br>
                            3.  Setiap pengguna sepakat untuk tidak menuliskan  informasi yang bersifat menyesatkan, memfitnah, asusila, mengandung pornografi, bersifat diskriminasi atau rasis.
                            <br></br>
                            4. Setiap pengguna sepakat untuk tidak mengambil atau mengumpulkan informasi dari pengguna lain, termasuk alamat email, tanpa sepengetahuan pengguna lain
                            <br></br>
                            5.  Setiap pengguna sepakat untuk tidak menuliskan iklan yang tidak sah, materi promosi, spam, surat massal, atau bentuk lainnya.
                            <br></br>
                            6. Setiap pengguna sepakat untuk tidak menuliskan identitas pihak ketiga pada fitur cerita, dan disarankan untuk menuliskan pada fitur lapor 
                            <br></br>
                            7. Tulisan pengguna tidak melanggar hukum atau peraturan apa pun yang berlaku.
                            <br></br>
                            8. Pengguna bertanggung jawab untuk menjaga kerahasiaan dan keamanan atas nama username dan password serta bertanggung jawab sepenuhnya atas segala kegiatan yang dilakukan oleh atau diatasnamakan nama akun Pengguna.
                            <br></br>
                            <br></br>
                            Setiap penggunaan yang melanggar ketentuan di atas dapat mengakibatkan, antara lain, penghentian hak Pengguna untuk menggunakan paltform Linita serta pelaporan terhadap pihak yang berwenang .  
                            <br></br>
                        </p>
                        <div className="title">II. Tanggung Jawab Kami :</div>
                          <p className="deskripsi">
                            1. Kewajiban kami hanyalah sebatas penyediaan platform linita.
                            <br></br>
                            2. Bentuk kerugian yang dikarenakan tindakan dari pengguna yang melanggar ketentuan ini menjadi tanggung jawab pengguna.
                            <br></br>
                            3. Tidak akan menyebarkan identitas pribadi pengguna kepada siapapun tanpa persetujuan.
                            <br></br>
                          </p>
                        <div>
                        </div>
                    </div>	
                        </div>
                        <div className="modal-footer justify-content-start">
                            <form onSubmit={submit}>
                                <div class="form-group">
                                    <label className="judulform form-label" for="InputName" >NAMA LENGKAP*</label><br></br>
                                    <input type="text" onChange={e => setNama(e.target.value)} className="form-control" id="InputName" placeholder="Nama lengkap sesuai KK / KTP"></input>
                                    </div>
                                <div class="form-group">
                                    <label className="judulform form-label" for="InputNIK" >NIK*</label><br></br>
                                    <input type="text" onChange={e => setNik(e.target.value)} className="form-control" id="InputNIK" placeholder="NIK sesuai KK / KTP"></input>
                                </div>
                                <input type="submit" className="btn-color btn-rules" onClick={submit} value="SUBMIT"></input> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCerita;