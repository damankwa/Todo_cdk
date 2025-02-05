#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TodoCdkStack } from '../lib/todo_cdk-stack';

const app = new cdk.App();
new TodoCdkStack(app, 'TodoCdkStack');