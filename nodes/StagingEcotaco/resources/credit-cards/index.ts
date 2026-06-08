import type { INodeProperties } from 'n8n-workflow';

export const creditCardsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Credit Cards"
					]
				}
			},
			"options": [
				{
					"name": "List All Credit Cards For The Current User",
					"value": "List All Credit Cards For The Current User",
					"action": "List all CreditCards for the current User",
					"description": "List all CreditCards for the current User",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/credit_cards"
						}
					}
				},
				{
					"name": "Get A Credit Card",
					"value": "Get A Credit Card",
					"action": "Get a CreditCard",
					"description": "Get a CreditCard",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/credit_cards/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /credit_cards",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credit Cards"
					],
					"operation": [
						"List All Credit Cards For The Current User"
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
						"Credit Cards"
					],
					"operation": [
						"List All Credit Cards For The Current User"
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
						"Credit Cards"
					],
					"operation": [
						"List All Credit Cards For The Current User"
					]
				}
			}
		},
		{
			"displayName": "GET /credit_cards/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Credit Cards"
					],
					"operation": [
						"Get A Credit Card"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of the Credit Card",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Credit Cards"
					],
					"operation": [
						"Get A Credit Card"
					]
				}
			}
		},
];
