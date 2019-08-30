import { Controller, Get } from '@nestjs/common';
import { Tampon } from './tampon';

@Controller('tampon')
export class TamponController {

  @Get('hello')
  getHello(): any {
    const tmp = new Tampon(
        'vcdfez', 'trodat4951', '5', 'frezfez', '58 * 35 mm', 'rectangle', 'mon tampon', '12', '50', '20', 'base64', 'base64', '1',
    );

    process.stdout.write(`${JSON.stringify(tmp)}`);
    return 0;
  }
}
