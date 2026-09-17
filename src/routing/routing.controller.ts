import {Controller, Get,All,HttpCode,Redirect,Header,Param} from '@nestjs/common';
@Controller('routing')
export class RoutingController {
    @All('all')
    handelAll(){
        return "This route handles GET, POST, PUT, PATCH, DELETE and OPTIONS requests";
    }

    @Get('httpcode')
    @HttpCode(204)
    getHttpCode(){
        return "This route handles GET requests and returns a 204 status code";
    }

    @Get('redirect')
    @Redirect('https://nestjs.com', 302)
    redirectToExternal(){
        // return "This route handles GET requests and redirects to https://nestjs.com";
    }

    @Get('header')
    @Header('Custom-Header', 'NesrtJS')
    getCustomHeader(){
        return "This route handles GET requests and returns a custom header";
    }

    @Get('student/:id')
    getWildCard(){
        return "This route handles GET requests with a wildcard parameter";
    }

    @Get('prime/:start/:end')
    getPrime(@Param('start') start: number, @Param('end') end: number){
        let primes: number[] = [];
        for(let i = start; i <= end; i++){
            let isPrime = true;
            if(i < 2) continue;
            for(let j = 2; j <= Math.sqrt(i); j++){
                if(i % j === 0){
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primes.push(i);
            }
        }
        return primes;
    }
}