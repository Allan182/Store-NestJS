import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico.validator";

export class AtualizaUsuarioDTO {

    @IsString({ message: "Insira Caracteres Validos" })
    @IsOptional()
    nome: string;

    @EmailUnico({ message: "Já Existe um Usuário com este E-mail!" })
    @IsEmail(undefined, { message: "Insira um E-mail Válido!" })
    @IsOptional()
    email: string;

    @IsOptional()
    @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres!" })
    senha: string;
}