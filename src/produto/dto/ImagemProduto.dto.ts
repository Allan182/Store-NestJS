import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class ImagemProdutoDTO {

    @IsNotEmpty()
    @IsUrl(undefined, { message: 'URL para imagem inválida' })
    url: String;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
    descricao: String;
}