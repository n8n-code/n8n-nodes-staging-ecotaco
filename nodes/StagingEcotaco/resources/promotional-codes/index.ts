import type { INodeProperties } from 'n8n-workflow';

export const promotionalCodesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Promotional Codes"
					]
				}
			},
			"options": [
				{
					"name": "Get All Promotional Codes For User",
					"value": "Get All Promotional Codes For User",
					"action": "Get all promotional codes for user",
					"description": "Get all promotional codes for user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/promotional_codes"
						}
					}
				},
				{
					"name": "Add A Promotional Code",
					"value": "Add A Promotional Code",
					"action": "Add a promotional code",
					"description": "Add a promotional code",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/promotional_codes"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /promotional_codes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Promotional Codes"
					],
					"operation": [
						"Get All Promotional Codes For User"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Promotional Codes"
					],
					"operation": [
						"Get All Promotional Codes For User"
					]
				}
			}
		},
		{
			"displayName": "Accept Language",
			"name": "Accept-Language",
			"description": "e.g. en",
			"default": "en",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept-Language": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Promotional Codes"
					],
					"operation": [
						"Get All Promotional Codes For User"
					]
				}
			}
		},
		{
			"displayName": "POST /promotional_codes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Promotional Codes"
					],
					"operation": [
						"Add A Promotional Code"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"description": "e.g. application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Promotional Codes"
					],
					"operation": [
						"Add A Promotional Code"
					]
				}
			}
		},
];
