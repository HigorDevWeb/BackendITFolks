import type { Schema, Struct } from '@strapi/strapi';

export interface ComoFuncionaComoFunciona extends Struct.ComponentSchema {
  collectionName: 'components_como_funciona_como_funcionas';
  info: {
    displayName: 'comoFunciona';
  };
  attributes: {
    discricao: Schema.Attribute.Blocks;
    labelComoFunciona: Schema.Attribute.String;
  };
}

export interface QuickExampleQuickExample extends Struct.ComponentSchema {
  collectionName: 'components_quick_example_quick_examples';
  info: {
    displayName: 'quickExample';
  };
  attributes: {
    description: Schema.Attribute.String;
    location: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiAgentItFolksContent extends Struct.ComponentSchema {
  collectionName: 'components_ui_agent_it_folks_contents';
  info: {
    displayName: 'AgentITFolksContent';
  };
  attributes: {
    BuscaPersonalizadaSub: Schema.Attribute.String;
    cityLabel: Schema.Attribute.String;
    cityPlaceholder: Schema.Attribute.String;
    clearButton: Schema.Attribute.String;
    companyLabel: Schema.Attribute.String;
    companyPlaceholder: Schema.Attribute.String;
    completeLabel: Schema.Attribute.String;
    explanation: Schema.Attribute.Blocks;
    groupLabel: Schema.Attribute.String;
    groupPlaceholder: Schema.Attribute.String;
    mainTitle: Schema.Attribute.String;
    searchButton: Schema.Attribute.String;
    searchSubtitle: Schema.Attribute.String;
    searchTitle: Schema.Attribute.String;
    stateLabel: Schema.Attribute.String;
    statePlaceholder: Schema.Attribute.String;
    subITFolks: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'como-funciona.como-funciona': ComoFuncionaComoFunciona;
      'quick-example.quick-example': QuickExampleQuickExample;
      'ui.agent-it-folks-content': UiAgentItFolksContent;
    }
  }
}
