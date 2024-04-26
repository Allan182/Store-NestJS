import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString, Max, MaxLength, Min, NotEquals, ValidateNested } from "class-validator";
import { CaracteristicaProdutoDTO } from "./CaracteristicaProduto.dto";
import { ImagemProdutoDTO } from "./ImagemProduto.dto";
import { Type } from "class-transformer";

export class CriaProdutoDTO {

    @IsString({ message: 'O nome deve ser uma String!' })
    @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
    nome: String;

    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false }, { message: "O Valor deve ser um número e ter no máximo duas casas decimais" })
    @Min(1, { message: 'O valor precisa ser maior que zero!' })
    @IsNotEmpty({ message: 'O valor do produto não pode ser vazia ' })
    valor: number;

    @IsNumber(undefined, { message: 'A Quantidade Deve ser Um Número Maior que Zero!' })
    @IsNotEmpty({ message: 'A Quantidade do produto não pode ser vazia!' })
    @Min(0, { message: 'Quantidade mínima inválida!' })
    quantidadeDisponivel: number;

    @ValidateNested()
    @IsArray()
    @Type(() => CaracteristicaProdutoDTO)
    @ArrayMinSize(3)
    caracteristicas: CaracteristicaProdutoDTO[];

    @IsString({ message: 'A Categoria deve ser uma String!' })
    @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
    categoria: String;

    @MaxLength(1000, { message: 'Descrição não pode ter mais que 1000 caracteres' })
    @IsString({ message: 'A Descrição deve ser uma String!' })
    @IsNotEmpty({ message: 'Descrição do produto não pode ser vazia ' })
    descricao: String;

    @ValidateNested()
    @IsArray()
    @Type(() => ImagemProdutoDTO)
    @ArrayMinSize(1)
    imagens: ImagemProdutoDTO[];

    @IsDateString()
    dataCriacao: Date;

    @IsDateString()
    dataAtualizacao: Date;
}