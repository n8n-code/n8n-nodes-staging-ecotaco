import type { INodeProperties } from 'n8n-workflow';

export const ecoTaCoApiRootDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Eco Ta Co API Root"
					]
				}
			},
			"options": [
				{
					"name": "Retrieve The Version API",
					"value": "Retrieve The Version API",
					"action": "Retrieve the version API",
					"description": "Retrieve the version API",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				},
				{
					"name": "Retrieve The Entry Point On Version",
					"value": "Retrieve The Entry Point On Version",
					"action": "Retrieve the Entry Point on Version",
					"description": "Retrieve the Entry Point on Version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"version\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eco Ta Co API Root"
					],
					"operation": [
						"Retrieve The Version API"
					]
				}
			}
		},
		{
			"displayName": "GET /{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Eco Ta Co API Root"
					],
					"operation": [
						"Retrieve The Entry Point On Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "Ecotaco API version",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Eco Ta Co API Root"
					],
					"operation": [
						"Retrieve The Entry Point On Version"
					]
				}
			}
		},
];
