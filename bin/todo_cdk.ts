#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TodoCdkStack } from '../lib/todo_cdk-stack';
import { PhotosStack } from '../lib/PhotosStack';
import { PhotosHandlerStack } from '../lib/PhotosHandlerStack';

const app = new cdk.App();
//new TodoCdkStack(app, 'TodoCdkStack');
new PhotosStack(app, 'PhotosStack');
new PhotosHandlerStack(app, 'PhotosHandlerStack');