terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.8.0"
    }
  }
}

provider "aws" {
  region = var.region
}

resource "aws_dynamodb_table" "terraform-locks" {
    name         = "terraform-locks-website"
    billing_mode = "PROVISIONED"
    hash_key     = "LockID"
    read_capacity  = 5
    write_capacity = 5

    attribute {
        name = "LockID"
        type = "S"
    }
}

terraform {
  required_version = ">= 0.13"

  backend "s3" {
    bucket = "terraform-state-mongulu" # should exists
    key = "website/terraform.tfstate"
    region = "eu-central-1"
    dynamodb_table = "terraform-locks-website"
    //encrypt = true
  }
}
