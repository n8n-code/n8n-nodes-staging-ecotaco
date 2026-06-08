import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { ecoTaCoApiRootDescription } from './resources/eco-ta-co-api-root';
import { accountsDescription } from './resources/accounts';
import { creditCardsDescription } from './resources/credit-cards';
import { ridesDescription } from './resources/rides';
import { promotionalCodesDescription } from './resources/promotional-codes';
import { adressesDescription } from './resources/adresses';
import { catchementAreasDescription } from './resources/catchement-areas';
import { productsDescription } from './resources/products';

export class StagingEcotaco implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'staging-ecotaco',
		name: 'N8nDevStagingEcotaco',
		icon: { light: 'file:./staging-ecotaco.png', dark: 'file:./staging-ecotaco.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API ecotaco allows you to connect, create an account,',
		defaults: { name: 'staging-ecotaco' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevStagingEcotacoApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Eco Ta Co API Root",
					"value": "Eco Ta Co API Root",
					"description": ""
				},
				{
					"name": "Accounts",
					"value": "Accounts",
					"description": "The account methods use the User ressource.\n\nThe User ressource has the following attributes :\n\n- **id** (required, unique, integer) : ID of the User\n\n- **name** (required, string) : Name of the User\n\n- **first_name** (required, string) : First name of the User\n\n- **email** (required, unique, string) : Email of the User\n\n- **phone** (required, string) : Phone of the User\n\n- **birth_date** (optional, string) : Birth date of the User\n\n- **language** (required, string) : Language of the User (fixed by the application)\n\n- **referral_code** (optional, string) : Driver referal code\n\n- **avatar_url** (optional, string) : Avatar Url of the User (fixed by the application, gravatar or facebook)\n\n- **newsletter** (required, boolean) : True if User want to receive the newsletter\n\n- **addresses** : An Array of addresses (see *Addresses*)\n\n- **companies** : An Array of companies (see *Companies*)\n\nThe User have a array of **Addresses** with the following attributes :\n\n- **city** (required, string) : City\n\n- **country** (required, string) : Country\n\n- **latitude** (required, float) : Latitude of the Address\n\n- **longitude** (required, float) : Longitude of the Address\n\n- **postal_code** (required, integer) : Postal Code\n\n- **type_address** (required, string) : Address Type (HOME of User)\n\n- **address_complement** (optional, string) : Address complement\n\n- **label** (optional, string) : Address Type (HOME of User)\n\nThe User have a array of **Companies** with the following attributes :\n\n- **id** (required, string) : Id\n\n- **user_id** (required, string) : Id of user attached to the company\n\n- **type_relation** (required, float) : Relation and role in the company\n\n- **name** (required, float) : Name of company\n\n**type_relation** :\n\n- company_manager : Can manage user and reserve for others user with relation on the company\n\n- visitor : Visitor of the company\n\n- collaborator : Collaborator of the company"
				},
				{
					"name": "Credit Cards",
					"value": "Credit Cards",
					"description": "CreditCards resource\n\nThe Credit Card ressource has the following attributes :\n\n- **id** (required, unique, integer) : ID of the credit card\n\n- **card_id** (required, string) : External stripe ID\n\n- **card_type** (required,string) : Card Type\n\n- **client** (required,string) : External stripe Customer ID\n\n- **expire_month** (required, integer) : Expire Mouth\n\n- **expire_year** (required, integer) : Expire Year\n\n- **label** (required, string) : Label of the Card\n\n- **last4** (required, string) : Last four digit in the card\n\n- **type_transaction** (required, string) : Type transaction (default : card)\n\n- **user_id** (required, integer) : ID of the User"
				},
				{
					"name": "Rides",
					"value": "Rides",
					"description": "The Ride resource has the following attributes :\n\n- **id** (required, unique, integer) : ID of the Ride\n\n- **booking_user_id** (integer) : ID of user who have create the ride\n\n- **company_id** (integer) : ID of company who have create the ride\n\n- **requested_start** (required, date) : Requested date of the ride\n\n- **flight_number** (string) : Fligth number\n\n- **train_number**  (string) : Train number\n\n- **nb_passengers** (required, integer) : Number of passengers (de 1 à 8)\n\n- **pick_up_or_tacking_out** (boolean) : If pick up or tacking out in station or other\n\n- **comment** (string) : Comment of ride forward to driver\n\n- **points** : Array of Points (see *Points*)\n one start point and one end point is required to create a ride\n\n- **passengers** : Array of Passengers (see *Passengers*)\n One passenger (attribute main: true) is mandatory to book a ride\n\n- **distance** (float) : Distance in Km\n\n- **driver_arrival** (date) : Date of real driver arrival\n\n- **duration** (integer) : Duration of the Ride in seconds\n\n- **price** (float) : price of the ride (without promotion)\n\n- **total_price** (float) : total price of the Ride\n\n- **real_end** (date) : Date of real end of ride\n\n- **real_start** (date) : Date of real start of ride\n\n- **refused_label** (string) : Refused Label (see *REFUSED_LABELS*)\n\n- **status** (string) : Status of the ride (see *STATUSES*)\n\n- **eta** (integer) : Estimated Time of arrival\n\n- **driver** (hash) : Information about driver (see *Driver*)\n\n- **vehicle** (hash) : Information about vehicle (see *Vehicle*)\n\n- **estimated_start** (date) : Estimated Start date of the ride\n\n- **estimated_end** (date) : Estimated End date of the ride\n\n- **promotional_code_used** : Promotional code use if any\n\n**STATUSES** :\n\n- NONE = ''\n\n- REFUSED = 'refused'\nThe ride can not be reserved\n\n- ESTIMATED = 'estimated'\nWe have availability for the ride, it can be reserved\n\n- RESERVED = 'reserved'\n\n- AFFECTED = 'affected'\n\n- SENT = 'sent'\n\n- IN_PROGRESS = 'in_progress'\n\n- CANCELLED = 'cancelled'\n\n- CUSTOMER_MISSING = 'customer_missing'\n\n- FINISHED = 'finished'\n\n- FAILED = 'failed'\n\n**REFUSED_LABELS** :\n\n- NOT_IN_A_CATCHEMENT_AREA = 'not_in_a_catchement_area'\n\n- ROUTE_COULD_NOT_BE_CALCULATE = 'route_could_not_be_calculate'\n\n- NO_DRIVER_AVAILABLE_WITH_MORE_THAN_4_PLACES = 'no_driver_available_with_vehicle_with_more_4_places'\n\n- NO_DRIVER_AVAILABLE = 'no_driver_available'\n\n- PLANNED_DRIVERS_BUT_NOT_CONNECTED = 'planned_drivers_but_not_conected'\n\n- ERROR_ON_ONLINE_AND_NEAR_OF = 'error_on_online_and_near_of'\n\n- TOMTOM_QUOTA_REACHED = 'tomtom_error_request_quota_reached'\n\n- AUTHORIZATION_REFUSED = 'authorization_refused'\n\nThe Ride have a array of **Points** with the following attributes :\n\nOnly one point with type start and only one point with type start\n\n- **id** (required, unique, integer) : ID of the Point\n\n- **longitude** (required, float) : Longitude of the Point\n\n- **latitude** (required, float) : Latitude of the Point\n\n- **type_point** (required, string) : Point Type ( 'start' or 'end' )\n\n- **address** (optional, string) : Address of the Point\n\n- **address_complement** (optional, string) : Address Complement of the Point\n\n- **postal_code** (optional, integer) : Postal Code of the Point\n\n- **city** (optional, string) : City of the Point\n\n- **country** (optional, string) : Country of the Point\n\n- **user_input** (optional, string) : User Input for the Point\n\n- **catchement_areas_id** (required, string) : Catchement Areas ID of the Point (fixed by the application)\n\n- **ride_id** (required, integer) : The Ride ID (fixed by the application)\n\n- **comment** (optional, string): Additionnals informations or comment\n\n- **contacts** (optional, array): Array of Contacts (see *Contacts*)\n\nThe Point may have a array of **Contacts** with the following attributes :\n\nThe contact on the pick up or drop off point\n\n- **email** (optional, string) : Email of the Contact\n\n- **first_name** (optional, string) : Fist Name of the Contact\n\n- **last_name** (optional, string) : Name of the Contact\n\n- **phone** (optional, string) : Phone number of the Contact\n\nThe Ride have a array of **Passengers** with the following attributes :\n\nOne main passenger (with main attribute at true) is required to book a ride\n\n- **main** (required, boolean) : If the passenger is the main passenger\n\n- **first_name** (optional, string) : Fist Name of the Passenger\n\n- **name** (optional, string) : Last Name of the Passenger\n\n- **phone** (optional, string) : Phone number of the Passenger (in international format)\n\n- **email** (optional, string) : Email of the Passenger (required for create user)\n\n- **user_id** (optional, integer) : The User ID related to the passenger if exist\n\n- **company_relation** (optional, integer) : The type of relation with the company for the passenger (if register is true)\n\n- **register** (optional, integer) : for register the passenger\n\nThe Ride have a hash of **Driver** with the following attributes :\n\nThis information is provided when the ride is in_progress status\n\n- **first_name** (optional, string) : Fist Name of the driver\n\n- **phone** (optional, string) : Phone number of the driver\n\n- **latitude** (optional, string) : Latitude of driver\n\n- **longitude** (optional, string) : Longitude of driver\n\nThe Ride have a hash of **Vehicle** with the following attributes :\n\nThis information is provided when the ride is in_progress status\n\n- **manufacturer** (optional, string) : Manufacturer of the vehicle\n\n- **color** (optional, string) : Color of the vehicle\n\n- **model** (optional, string) : Model of the vehicle"
				},
				{
					"name": "Promotional Codes",
					"value": "Promotional Codes",
					"description": "Promotional Codes resource\n\nThe Promotional Codes ressource has the following attributes :\n\n- **id** (required, unique, integer) : ID of the affected promotional code\n\n- **status** (required, string) : Status of the affected promotional code ('used' or 'notused')\n\n- **code** (required, string) : The code of the promotional code\n\n- **label** (required, string) : Label of the promotional code\n\n- **promotional_type** (required, string) : The type of promotional code ('pourcent', 'amount' or 'km')\n\n- **value** (required, float) : the value of the promotional code\n\n- **start_date** (required, date) : Start Date for the promotional code\n\n- **end_date** (required, date) : End Date for the promotional code"
				},
				{
					"name": "Adresses",
					"value": "Adresses",
					"description": "The Addresses use google API for searching places, and also user favorite or best places."
				},
				{
					"name": "Catchement Areas",
					"value": "Catchement Areas",
					"description": "Catchement area resource\n\nThe catchement area ressource has the following attributes :\n\n- **id** (required, unique, integer) : ID of the catchement area\n\n- **label** (required, string) : Label\n\n- **launch_at** (required, date) : Launch date of catchement area\n\n- **coordinates** (required, array) : coordinates\n\n**Coordinates** :\n\n- **id** (required, unique, integer) : ID of the coordinates\n\n- **latitude** (required, float) : Latitude of the coordinates\n\n- **longitude** (required, float) : Longitude of the coordinates\n\n- **rank** (required, integer) : Rank to order coordinates of th catchement area\n\nWe provide json or geojson format"
				},
				{
					"name": "Products",
					"value": "Products",
					"description": "Product resource\n\nThe product ressource has the following attributes :\n\n- **id** (required, unique, integer) : ID of the product\n\n- **product_type** (required, string) : Product type (See *TYPES*)\n\n- **name** (required, dastringte) : Name of product\n\n- **description** (required, string) : Description of product\n\n**TYPES** :\n\n- transport_person : On demand transport person\n\n- package_delivery : Package delivery"
				}
			],
			"default": ""
		},
		...ecoTaCoApiRootDescription,
		...accountsDescription,
		...creditCardsDescription,
		...ridesDescription,
		...promotionalCodesDescription,
		...adressesDescription,
		...catchementAreasDescription,
		...productsDescription
		],
	};
}
