import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {

    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async emailExiste(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario !== undefined;
    }

    async atualiza(id: string, dadosDeAtt: Partial<UsuarioEntity>) {
        const possivelUsuario = this.usuarios.find(
            userSave => userSave.id === id
        );

        if (!possivelUsuario) {
            throw new Error('Usuário não encontrado!');
        };

        Object.entries(dadosDeAtt).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            possivelUsuario[chave] = valor;
        });

        return possivelUsuario;
    }
}