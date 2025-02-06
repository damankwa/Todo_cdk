#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TodoCdkStack } from '../lib/todo_cdk-stack';
import { PhotosStack } from '../lib/PhotosStack';

const app = new cdk.App();
new TodoCdkStack(app, 'TodoCdkStack');
new PhotosStack(app, 'PhotosStack');