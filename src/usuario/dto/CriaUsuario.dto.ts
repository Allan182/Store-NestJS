import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class criaUsuarioDTO {
    
    @IsNotEmpty({
        message: "O Nome não pode ser vazio!"
    })
    nome: String;

    @IsEmail(undefined, {
        message: "Insira um E-mail Válido!"
    })
    email: String;

    @MinLength(6, {message : "A senha deve ter no mínimo 6 caracteres!"})
    senha: String;
}