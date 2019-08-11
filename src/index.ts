import 'reflect-metadata';
import { Container } from 'inversify';
import { CGX } from './cgx';
import { Logger } from './utils/logger.util';
import { Checker } from './utils/checker.util';
import { DefaultTemplate } from './templates/default/default.template';
import { CodeOfConduct, Contributing, License, ToDo, Readme, Changelog } from './templates/universal';
import { BugReport, FeatureRequest, PullRequest, Security } from './templates/github';
import { Bug, CITemplate, FeatureProposal, MergeRequest } from './templates/gitlab';

export function index(): CGX {
  const container: Container = new Container();

  // Utils
  container.bind<Logger>('Logger').to(Logger).inSingletonScope();
  container.bind<Checker>('Checker').to(Checker).inSingletonScope();

  // Default Template
  container.bind<DefaultTemplate>('DefaultTemplate').to(DefaultTemplate).inSingletonScope();

  // Universal Templates (Github, Gitlab and Bitbucket)
  container.bind<License>('License').to(License).inSingletonScope();
  container.bind<Contributing>('Contributing').to(Contributing).inSingletonScope();
  container.bind<CodeOfConduct>('CodeOfConduct').to(CodeOfConduct).inSingletonScope();
  container.bind<ToDo>('ToDo').to(ToDo).inSingletonScope();
  container.bind<Readme>('Readme').to(Readme).inSingletonScope();
  container.bind<Changelog>('Changelog').to(Changelog).inSingletonScope();

  // Github Templates
  container.bind<BugReport>('BugReport').to(BugReport).inSingletonScope();
  container.bind<FeatureRequest>('FeatureRequest').to(FeatureRequest).inSingletonScope();
  container.bind<PullRequest>('PullRequest').to(PullRequest).inSingletonScope();
  container.bind<Security>('Security').to(Security).inSingletonScope();

  // Gitlab Templates
  container.bind<CITemplate>('CITemplate').to(CITemplate).inSingletonScope();
  container.bind<FeatureProposal>('FeatureProposal').to(FeatureProposal).inSingletonScope();
  container.bind<Bug>('Bug').to(Bug).inSingletonScope();
  container.bind<MergeRequest>('MergeRequest').to(MergeRequest).inSingletonScope();

  // Bitbucket - in future versions
  // 

  // CGX
  container.bind<CGX>('CGX').to(CGX).inSingletonScope();

  return container.get<CGX>('CGX');
};

index();