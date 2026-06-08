import type { INodeProperties } from 'n8n-workflow';

export const catchementAreasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Catchement Areas"
					]
				}
			},
			"options": [
				{
					"name": "List All Catchement Areas",
					"value": "List All Catchement Areas",
					"action": "List all catchement areas",
					"description": "List all catchement areas",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/catchement_areas"
						}
					}
				},
				{
					"name": "Get A Catchement Area",
					"value": "Get A Catchement Area",
					"action": "Get a Catchement Area",
					"description": "Get a Catchement Area",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/catchement_areas/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /catchement_areas",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Catchement Areas"
					],
					"operation": [
						"List All Catchement Areas"
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
						"Catchement Areas"
					],
					"operation": [
						"List All Catchement Areas"
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
						"Catchement Areas"
					],
					"operation": [
						"List All Catchement Areas"
					]
				}
			}
		},
		{
			"displayName": "GET /catchement_areas/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Catchement Areas"
					],
					"operation": [
						"Get A Catchement Area"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"description": "Numeric `id` of the Catchement Area",
			"default": "1",
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Catchement Areas"
					],
					"operation": [
						"Get A Catchement Area"
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
						"Catchement Areas"
					],
					"operation": [
						"Get A Catchement Area"
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
						"Catchement Areas"
					],
					"operation": [
						"Get A Catchement Area"
					]
				}
			}
		},
];
