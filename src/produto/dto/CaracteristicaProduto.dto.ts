import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class CaracteristicaProdutoDTO {

    @IsString()
    @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
    nome: String;

    @IsString()
    @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
    descricao: String;
}