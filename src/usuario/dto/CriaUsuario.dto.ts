import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class criaUsuarioDTO {

    @IsString({ message: "Insira Caracteres Validos" })
    @IsNotEmpty({ message: "O Nome não pode ser vazio!" })
    nome: string;

    @EmailUnico({ message: "Já Existe um Usuário com este E-mail!" })
    @IsEmail(undefined, { message: "Insira um E-mail Válido!" })
    email: string;

    @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres!" })
    senha: string;
}