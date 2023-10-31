<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Preencha os campos</h5>
    <form @submit.prevent="enviarAjuda" method="post" enctype="multipart/form-data">
      <q-input label="Nome" v-model="nome" />
      <q-input label="Contato" v-model="contato" />
      <q-input label="Email" v-model="email" type="email" />
      <q-input label="Assunto" v-model="Assunto" />
      <q-input label="Mensagem de Ajuda" v-model="mensagem" type="textarea" />
      <q-btn color="primary" label="Enviar Ajuda" type="submit" />
    </form>
    <q-dialog v-model="mostrarMensagem" persistent>
      <q-card>
        <q-card-section>
          <q-card-title class="text-h6">Email Enviado com Sucesso!</q-card-title>
          <q-card-main>
            Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
          </q-card-main>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Fechar" color="primary" @click="mostrarMensagem = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AjudaPage',
  data() {
    return {
      nome: '',
      contato: '',
      email: '',
      Assunto: '',
      mensagem: '',
      mostrarMensagem: false, // Para controlar a exibição da mensagem
    };
  },
  methods: {
    enviarAjuda() {
      const formData = new FormData();
      formData.append('nome', this.nome);
      formData.append('contato', this.contato);
      formData.append('email', this.email);
      formData.append('Assunto', this.Assunto);
      formData.append('mensagem', this.mensagem);

      fetch('URL_DO_SEU_ENDPOINT', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // Sucesso no envio do email
            this.mostrarMensagem = true; // Exibir mensagem de confirmação
          } else {
            // Trate erros no envio do email, se necessário
          }
        })
        .catch((error) => {
          console.error('Erro:', error);
          // Lide com erros de rede, se necessário
        });
    }
  }
})
</script>
