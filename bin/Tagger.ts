import { IAspect } from "aws-cdk-lib";
import { CfnBucket } from "aws-cdk-lib/aws-s3";
import { IConstruct } from "constructs";

export class BucketTagger implements IAspect{

    private Key: string;
    private value: string;

    constructor(key: string, value: string){
        this.Key = key;
        this.value = value;
    }


    visit(node: IConstruct): void {
        console.log('visiting: ' + node.node.id);
        if (node instanceof CfnBucket){
            node.tags.setTag(this.Key, this.value)
        }
    }
}