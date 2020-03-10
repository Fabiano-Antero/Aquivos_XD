import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { Network } from '@ionic-native/network/ngx';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class IdentificacaoService {

  allObject = {
    aluno: {
      email: '',
      grupo: '',
      matricula: 0,
      nome: ''
    },
    anotacoes_globais: '',
    paciente: {
      cor: '',
      enfermaria: '',
      estado_civil: '',
      hora_inicio: '',
      idade: 0,
      leito: '',
      nacionalidade: '',
      nome: '',
      posicionamento_sexual: '',
      profissao: '',
      queixa_principal: '',
      religiao: '',
      sexo: ''
    },
    isda: {
      abdome: {
        colon_diarreia: '',
        colon_dor: '',
        colon_obstipacao: '',
        colon_prurido: '',
        colon_sangramento: '',
        estomago_dispepsia: '',
        estomago_dor: '',
        estomago_nauseas: '',
        estomago_pirose: '',
        figado_dor: '',
        figado_ictericia: '',
        intestino_diarreia: '',
        intestino_distensao: '',
        intestino_dor: '',
        intestino_esteatorreia: '',
        intestino_hemorragia: '',
        pancreas_diarreia: '',
        pancreas_dor: '',
        pancreas_nauseas: '',
        paredeabdominal_alteracao: '',
        paredeabdominal_dor: ''
      },
      antecedentes: {
        familia_alzheimer: '',
        familia_cancer_especifique: '',
        familia_cancer_outros: '',
        familia_cancer_valor: '',
        familia_diabetes: '',
        familia_enxaqueca: '',
        familia_has: '',
        familia_outros: '',
        pessoais_fisiologicos_desenvolvimento_psicomotor: '',
        pessoais_fisiologicos_desenvolvimento_sexual: '',
        pessoais_fisiologicos_gestacao_nascimento: '',
        pessoais_patologico_alergias: '',
        pessoais_patologico_cirurgias: '',
        pessoais_patologico_doencas_atuais: '',
        pessoais_patologico_doencas_sofridas: '',
        pessoais_patologico_historia: '',
        pessoais_patologico_medicamentos_em_uso: '',
        pessoais_patologico_transfusoes: ''
      },
      coluna_vertebral: {
        crepitacao_articular: '',
        dor: '',
        manifestacao_sistemica: '',
        rigidez: '',
        sinais_inflamatorios: ''
      },
      ectoscopia: {
        acies: '',
        atitude_decubito: '',
        biotipo: '',
        cacifo_detalhe: '',
        cacifo_presenca: '',
        ectoscopia_outras_observacoes: '',
        edema_consistencia: '',
        edema_descricao_edema: '',
        edema_detalhes_consistencia: '',
        edema_detalhes_dor: '',
        edema_detalhes_intensidade: '',
        edema_detalhes_localizacao: '',
        edema_dor: '',
        edema_intensidade: '',
        edema_localizacao: '',
        edema_presenca: '',
        edema_temperatura: '',
        edema_temperatura_detalhe: '',
        estado_geral: '',
        estado_hidratacao_quantificacao: '',
        estado_hidratacao_tipo: '',
        estado_nutricional_estado: '',
        estado_nutricional_quantidade: '',
        faneros_cabelos_brilho: '',
        faneros_cabelos_coloracao: '',
        faneros_cabelos_distribuicao: '',
        faneros_cabelos_quantidade: '',
        faneros_cabelos_tipos_implatacao: '',
        faneros_unhas_cor: '',
        faneros_unhas_formato: '',
        faneros_unhas_resistencia: '',
        interacoes_exp_facial: '',
        interacoes_exp_facial_detalhes: '',
        interacoes_fala_linguagem: '',
        interacoes_fala_linguagem_detalhes: '',
        linfonodos_adenomegalia: '',
        linfonodos_alteracoes_pele: '',
        linfonodos_consistencia: '',
        linfonodos_descricao_dor: '',
        linfonodos_dor: '',
        linfonodos_localizacao: '',
        linfonodos_mobilidade: '',
        linfonodos_presenca: '',
        linfonodos_quantidade: '',
        linfonodos_sensibilidade: '',
        linfonodos_tamanho: '',
        linfonodos_textura: '',
        linfonodos_volume: '',
        mov_involuntarios: '',
        mov_involuntarios_descricao: '',
        mov_involuntarios_presenca: '',
        mucosas_coloracao: '',
        mucosas_hidratacao: '',
        mucosas_lesoes: '',
        nivel_consciencia_lucidez: '',
        nivel_consciencia_orientacao: '',
        pele_coloracao: '',
        pele_continuidade: '',
        pele_elasticidade: '',
        pele_espessura: '',
        pele_lesoes_elementares: '',
        pele_mobilidade: '',
        pele_sensibilidade: '',
        pele_temperatura: '',
        pele_textura: '',
        pele_turgor: '',
        pele_umidade: '',
        perfusao_capilar_lentificada_tempo: '',
        perfusao_capilar_tipo: '',
        postura_atitude: '',
        tecido_celular_subcutaneo_espasticidade: '',
        tecido_celular_subcutaneo_espessura: '',
        tecido_celular_subcutaneo_flacidez: ''
      },
      habitos_de_vida: {
        ajustamento_familiar: '',
        alimentacao: '',
        atividades_fisicas: '',
        banho_frequencia: '',
        banho_ultimo_banho: '',
        banho_valor: '',
        condicoes_sociais: '',
        consumo_alcool: '',
        contato_animais: '',
        contato_triatomineo: '',
        drogas_outros: '',
        drogas_valor: '',
        habitacao: '',
        lazer: '',
        padraosono_acorda_antes: '',
        padraosono_acorda_durante: '',
        padraosono_demora_iniciar: '',
        padraosono_valor: '',
        tabagismo_anos_maco: '',
        tabagismo_valor: '',
        vida_conjugal: ''
      },
      musculos: {
        atrofia_muscular: '',
        caibras: '',
        dificuldade_andar: '',
        dor: '',
        espasmos_musculares: '',
        fraqueza_muscular: ''
      },
      nervoso: {
        amnesia: '',
        ausencias: '',
        automatismos: '',
        cefaleia: '',
        convusoes: '',
        disturbios_auditivos: '',
        disturbios_consciencia: '',
        disturbios_esfincterianos: '',
        disturbios_funcoes: '',
        disturbios_mancha: '',
        disturbios_motricidade: '',
        disturbios_sono: '',
        disturbios_visuais: '',
        outros: '',
        tontura_vertigem: ''
      },
      sintomas_gerais: {
        alteracao_peso_presenca: '',
        alteracao_peso_tempo: '',
        alteracao_peso_valor: '',
        alteracao_peso_valor_peso: '',
        caibras: '',
        calafrios: '',
        cavidade_bucal_dor: '',
        cavidade_bucal_halitose: '',
        cavidade_bucal_silose: '',
        cavidade_bucal_ulceracoes: '',
        faringe_disfagia: '',
        faringe_dor_garganta: '',
        faringe_halitose: '',
        faringe_pigarro: '',
        faringe_ronco: '',
        faringe_tosse: '',
        febre_presenca: '',
        febre_tempo: '',
        febre_valor: '',
        nariz_corrimento_nasal: '',
        nariz_diminuicao_olfato: '',
        nariz_dispneia: '',
        nariz_dor: '',
        nariz_epistaxe: '',
        nariz_espirros: '',
        nariz_obstrucao_nasal: '',
        nariz_prurido: '',
        olhos_dor_ocular: '',
        olhos_fotofobia: '',
        olhos_olho_seco: '',
        olhos_perda_visao: '',
        olhos_prurido: '',
        olhos_queimacao: '',
        olhos_vermelhidao: '',
        ouvido_otoragia: '',
        ouvidos_dor: '',
        ouvidos_otorreia: '',
        ouvidos_tontura: '',
        ouvidos_zumbidos: '',
        quantidade: '',
        sintomas: '',
        sudoreses: '',
        tempo: ''
      },
      sistema_geniturinario: {
        orgaosgenitais_dor: '',
        orgaosgenitais_feminino_corrimento: '',
        orgaosgenitais_feminino_hemorragia: '',
        orgaosgenitais_feminino_prurido: '',
        orgaosgenitais_masculino_corrimento: '',
        orgaosgenitais_masculino_disfuncoes: '',
        orgaosgenitais_masculino_hemospernia: '',
        orgaosgenitais_masculino_lesoes: '',
        orgaosgenitais_masculino_nodulos: '',
        orgaosgenitais_masculino_priapismo: '',
        rins_alt_cheiro_urina: '',
        rins_alt_cor_urina: '',
        rins_alt_miccionais: '',
        rins_alt_volume_urinario: '',
        rins_dor: '',
        rins_edema: '',
        rins_febre: ''
      },
      sistema_hemolinfopetico: {
        adenomegalia: '',
        astenia: '',
        esplenomegalia: '',
        hemorragia: '',
        hepatomegalia: ''
      },
      torax: {
        coracao_alteracoes_sono: '',
        coracao_astenia: '',
        coracao_cianose: '',
        coracao_desmaio_esforco: '',
        coracao_dor: '',
        coracao_edema: '',
        coracao_intolerancia_esforcos: '',
        coracao_palpitacoes: '',
        diafragma_dor: '',
        diafragma_sintomas_compressao: '',
        diafragma_soluco: '',
        esofago_disfagia: '',
        esofago_dor: '',
        esofago_hematemese: '',
        esofago_odinofagia: '',
        esofago_pirose: '',
        esofago_regurgitacao: '',
        mamas_dor: '',
        mamas_nodulo: '',
        mamas_secrecao: '',
        parede_toraxica_dispineia: '',
        parede_toraxica_dor: '',
        traqueia_chieira: '',
        traqueia_dor: '',
        traqueia_estridor: '',
        traqueia_expectoracao: '',
        traqueia_hemoptise: '',
        traqueia_tosse: '',
        traqueia_triagem: '',
        traqueia_vomica: ''
      }

    },
    exame_fisico: {
      abdome: {
        abdome_inspecao_cicatriz_cirurgica: '',
        abdome_inspecao_cicatriz_cirurgica_descricao: '',
        abdome_inspecao_cicatriz_umbilical: '',
        abdome_inspecao_presenca_circulacao_colateral: '',
        abdome_inspecao_presenca_circulacao_colateral_descricao: '',
        abdome_inspecao_presenca_de_retratacoes: '',
        abdome_inspecao_presenca_de_retratacoes_descricao: '',
        abdome_inspecao_pulsatilidade_da_aorta: '',
        abdome_inspecao_sinal_de_culen: '',
        abdome_inspecao_sinal_de_gray_turner: '',
        abdome_inspecao_tipo_cicatriz_umbilical: '',
        abdome_inspecao_tipo_do_abdome: '',
        abdome_manobrasespeciais_lemostorres_borda: '',
        abdome_manobrasespeciais_lemostorres_consistencia: '',
        abdome_manobrasespeciais_lemostorres_dolorosa: '',
        abdome_manobrasespeciais_lemostorres_palpavel: '',
        abdome_manobrasespeciais_lemostorres_superficie: '',
        abdome_manobrasespeciais_manobra_de_shuster_palpavel: '',
        abdome_manobrasespeciais_mathieu_borda: '',
        abdome_manobrasespeciais_mathieu_consistencia: '',
        abdome_manobrasespeciais_mathieu_dolorosa: '',
        abdome_manobrasespeciais_mathieu_palpavel: '',
        abdome_manobrasespeciais_mathieu_superficie: '',
        abdome_manobrasespeciais_sinal_de_blemberg: '',
        abdome_manobrasespeciais_sinal_de_murphy: '',
        abdome_palpacao_dor: '',
        abdome_palpacao_dor_descricao: '',
        abdome_palpacao_massas_abdominais: '',
        abdome_palpacao_massas_abdominais_descricao: '',
        abdome_palpacao_tensao_abdominal: '',
        abdome_percussao_esplenomegalia: '',
        abdome_percussao_esplenomegalia_descricao: '',
        abdome_percussao_hepatomegalia: '',
        abdome_percussao_hepatomegalia_descricao: '',
        abdome_percussao_macizez_movel_de_decubito: '',
        abdome_percussao_presenca_de_massas: '',
        abdome_percussao_presenca_de_massas_descricao: '',
        abdome_percussao_sinal_de_piparote: '',
        abdome_percussao_som: ''
      },
      cardiovascular: {
        cardiovascular_auscultacardiaca_frequencia_cardiaca: '',
        cardiovascular_auscultacardiaca_intensidade_do_som: '',
        cardiovascular_auscultacardiaca_ritmo_cardiaco: '',
        cardiovascular_auscultacarotidea_presenca_de_sopro: '',
        cardiovascular_inspecaoepalpacao_fremitocardiovascular_intensidade: 0,
        cardiovascular_inspecaoepalpacao_fremitocardiovascular_localizacao: '',
        cardiovascular_inspecaoepalpacao_fremitocardiovascular_situacao_ciclo_cardiaco: '',
        cardiovascular_inspecaoepalpacao_fremitocardiovascular_valor: '',
        cardiovascular_inspecaoepalpacao_intensidade: '',
        cardiovascular_inspecaoepalpacao_lesoes_elementares: '',
        cardiovascular_inspecaoepalpacao_localizacao_fremito: '',
        cardiovascular_inspecaoepalpacao_polpas_digitais: '',
        cardiovascular_inspecaoepalpacao_presenca_de_abaulamento: '',
        cardiovascular_inspecaoepalpacao_situacao_do_ciclo: '',
        cardiovascular_inspecaoepalpacao_tipo_polpa_digital: '',
        cardiovascular_inspecaoepalpacao_turgencia_jugular: '',
        cardiovascular_soprocardiaco_foco: '',
        cardiovascular_soprocardiaco_intensidade: '',
        cardiovascular_soprocardiaco_relacao_ciclo_cardiaco: ''

      },
      respiratorio: {
        respiratorio_auscultapulmonar_atritopleural_localizacao: '',
        respiratorio_auscultapulmonar_atritopleural_valor: '',
        respiratorio_auscultapulmonar_auscultavoz_ressonancia_aumentada: '',
        respiratorio_auscultapulmonar_auscultavoz_valor: '',
        respiratorio_auscultapulmonar_estritor_localizacao: '',
        respiratorio_auscultapulmonar_estritor_valor: '',
        respiratorio_auscultapulmonar_estritorfino_localizacao: '',
        respiratorio_auscultapulmonar_estritorfino_valor: '',
        respiratorio_auscultapulmonar_estritorgrosso_localizacao: '',
        respiratorio_auscultapulmonar_estritorgrosso_valor: '',
        respiratorio_auscultapulmonar_murmurio_vesicular_presente: '',
        respiratorio_auscultapulmonar_murmurio_vesicular_sonoridade: '',
        respiratorio_auscultapulmonar_murmuriovesicular_localizacao: '',
        respiratorio_auscultapulmonar_murmuriovesicular_valor: '',
        respiratorio_auscultapulmonar_roncos_localizacao: '',
        respiratorio_auscultapulmonar_roncos_valor: '',
        respiratorio_auscultapulmonar_sibilos_localizacao: '',
        respiratorio_auscultapulmonar_sibilos_valor: '',
        respiratorio_auscultapulmonar_sopro_localizacao: '',
        respiratorio_auscultapulmonar_sopro_valor: '',
        respiratorio_palpacao_ftv_localizacao: '',
        respiratorio_palpacao_ftv_valor: '',
        respiratorio_palpacao_localizacao_percussao: '',
        respiratorio_palpacao_macico: '',
        respiratorio_palpacao_manobra_de_lasengue: '',
        respiratorio_palpacao_manobra_de_ruault: '',
        respiratorio_palpacao_percussao: '',
        respiratorio_palpacao_presencadedor_dorirradia_frequencia: '',
        respiratorio_palpacao_presencadedor_dorirradia_valor: '',
        respiratorio_palpacao_presencadedor_fatores_que_pioram_a_dor: '',
        respiratorio_palpacao_presencadedor_frenquencia_da_dor: '',
        respiratorio_palpacao_presencadedor_intensidade: '',
        respiratorio_palpacao_presencadedor_intensidade_da_dor: '',
        respiratorio_palpacao_presencadedor_localizacao: '',
        respiratorio_palpacao_presencadedor_tipo_da_dor: '',
        respiratorio_palpacao_submacico_localizacao: '',
        respiratorio_palpacao_submacico_valor: '',
        respiratorio_palpacao_timpanico: '',
        respiratorio_papacao_som_pulmonar: '',
        respiratorio_presencacicatriz_motivo: '',
        respiratorio_presencacicatriz_valor: '',
      }

    }
  };


  results: Observable<any>;

  public verifica = [];
  public validacao = false;
  public storageConect = false;


  url = 'http://eregular.fabrica.unipe.br:8060/anamnese';
  // url = 'http://localhost:5000/anamnese';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private network: Network,

    public toastController: ToastController,
    public router: Router,
  ) {

  }
  // verifica se todos os campos foram preenchidos

  verificador() {
    const valor = this.verifica.length;

    if (valor === 11) {
      return true;
    } else {
      return false;
    }

  }

  async alerta(page, msg) {
    const toast = await this.toastController.create({
      header: page,
      message: msg,
      buttons: ['OK'],

    });

    toast.present();
  }

  // GET: Mostrar os dados da API
  showData(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(results => {

        console.log('RAW: ', results);
        return results[''];
      })
    );
  }


  // POST: Enviar dados para a API
  postData(paciente) {
    return this.http.post(this.url, paciente);

  }

 
  // Chamar os dados e os coloca em um observable resultado
  callData() {
    this.results = this.showData();
    this.results.subscribe(res => {
    },
      (error: HttpErrorResponse) => {

        if (error.status === 0) {
          this.alerta('Ops, há algo errado!', 'Sem resposta da API, verifique sua conexão ou tente novamente.');
          this.router.navigate(['/', 'home']);

        }
        console.log(error.error);
      }

    );
    console.log(this.allObject);
  }

  // Chama o envio de dados (para se comunicar com a API)
  callpostData() {
    console.log(this.validacao);

    if (this.validacao === true) {
      this.results = this.postData(this.allObject);
      this.results.subscribe(res => {
        console.log(res);
        if (res.status === 200) {
          this.alerta('Anamnese', 'Enviada com sucesso!');
          this.router.navigate(['/', 'home']);
        }
      },
        (error: HttpErrorResponse) => {

          if (error.status === 0) {
            this.alerta('Ops, há algo errado!', 'Sem conexa com a API, os dados serão salvos na lista de anamenses');
            this.storageService.addItem(this.allObject);
            this.router.navigate(['/', 'home']);

          } else {
            const msg = error.error.message;
            const page = 'Anamnese';
            this.alerta(page, msg);
          }
          console.log(error.error);
        }

      );
    } else {
      this.alerta('Ops, há algo errado!', 'Não foi possivel realizar o envio. Por favor, preencha todos os campos.');
    }

  }

  // para enviar os dados armazenados localmente
  callpostDataStorage() {

    this.results = this.postData(this.allObject);
    this.results.subscribe(res => {
      console.log(res);
      if (res.status === 200) {
        this.alerta('Anamnese', 'Enviada com sucesso!');
        this.router.navigate(['/', 'home']);
      }
    },
      (error: HttpErrorResponse) => {
        const msg = error.error.message;
        const page = 'Ops, há algo de errado!';
        this.alerta(page, msg);
      }

    );

  }


}

