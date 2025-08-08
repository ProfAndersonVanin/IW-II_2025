# IW-II_2025


En alguns momentos fica a dica para zerar as credenciais do github na máquina (especialmente quando em uso dos laboratórios de Informática)

# Limpar credenciais
- git config --global --unset user.name
- git config --global --unset user.email
# Limpar as informações de credenciais globais guardadas
- git config --global --unset credential.helper
# Apagar as informações de credenciais contidas no sistema
- git config --system --unset credential.helper
