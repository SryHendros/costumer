import { Controller, Get, Post } from '@nestjs/common'; //body kita ubah jadi Get, karena get berfungsi menghubungkan ke localhost(http)
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('barang') // dihalaman localhost akan tampil di dashboard nama barang yang kita buat karna disini kita menggunakan get
  getBarang(): string {
    return 'Data barang gudang tersedia';
  }

  @Post('barang/masuk')
  barangMasuk(): string {
    return 'Barang berhasil ditambahkan ke gudang';
  }

  @Post('barang/keluar')
  barangKeluar(): string {
    return 'Barang berhasil dikeluarkan dari gudang';
  }
}
