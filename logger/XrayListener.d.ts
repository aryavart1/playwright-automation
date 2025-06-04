/// <reference types="node" />
import { Reporter, TestCase, TestError, TestResult, TestStep } from '@playwright/test/reporter'
export default class TestListener implements Reporter {
  
  onTestBegin(test: TestCase, result: TestResult): void;
  onTestEnd(test: TestCase, result: TestResult): void;
  onStdOut(chunk: string | Buffer, test ?: TestCase, result ?: TestResult): void;
  onStdErr(chunk: string | Buffer, test ?: TestCase, result ?: TestResult): void;
  onStepBegin(test: TestCase, result: TestResult, step: TestStep): void;
  onStepEnd(test: TestCase, result: TestResult, step: TestStep): void;
  onExit(): Promise<void>; 
  onError(error: TestError): void;
  
  private printLogs;
}