from dbfread import DBF
import pandas as pd
import os

# Fungsi untuk membaca DBF ke DataFrame dan mengubah ke HTML
def dbf_to_html(path, title):
    table = DBF(path, load=True)
    df = pd.DataFrame(iter(table))
    html = f"<h4>{title}</h4>" + df.to_html(index=False, border=1)
    return html

# Folder tempat file dbf disimpan
folder_path = "new folder"

# File yang akan dibaca (pastikan file ini benar-benar ada)
files = {
    "Tabel Titik Banjir": os.path.join(folder_path, "data banjir kelompok.dbf"),
    "Tabel Sungai": os.path.join(folder_path, "Sungai.dbf"),
    "Tabel Batas Kota Padang": os.path.join(folder_path, "Padang adm.dbf"),
    "Tabel Batas Provinsi Sumatera Barat": os.path.join(folder_path, "sumatera barat.dbf")
}

# Gabungkan seluruh tabel menjadi HTML tunggal
html_content = "<html><body>"
for title, filepath in files.items():
    if os.path.exists(filepath):
        html_content += dbf_to_html(filepath, title)
    else:
        html_content += f"<h4>{title}</h4><p style='color:red;'>File tidak ditemukan: {filepath}</p>"
html_content += "</body></html>"

# Simpan file HTML
with open("semua_tabel.html", "w", encoding="utf-8") as f:
    f.write(html_content)

print("File 'semua_tabel.html' berhasil dibuat.")
