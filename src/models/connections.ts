export type Connection = {
	id: string; // Unique identifier for this integration object
	createdAt: Date; // The date that this integration object was created
	updatedAt: Date; // The last date that this integration object was updated
	workspaceId?: string;
	integrationType: string; // The integration type
	externalXref?: string; // customer's user ID
	permissions: ( 'auth_login' | 'accounting_account_read' | 'accounting_account_write' | 'accounting_transaction_read' | 'accounting_transaction_write' | 'accounting_journal_read' | 'accounting_journal_write' | 'accounting_invoice_read' | 'accounting_invoice_write' | 'accounting_contact_read' | 'accounting_contact_write' | 'accounting_taxrate_read' | 'accounting_taxrate_write' | 'accounting_organization_read' | 'payment_payment_read' | 'payment_payment_write' | 'payment_payout_read' | 'payment_refund_read' | 'payment_link_read' | 'payment_link_write' | 'commerce_item_read' | 'commerce_item_write' | 'commerce_collection_read' | 'commerce_collection_write' | 'commerce_inventory_read' | 'commerce_inventory_write' | 'commerce_location_read' | 'commerce_location_write' | 'ats_activity_read' | 'ats_activity_write' | 'ats_application_read' | 'ats_application_write' | 'ats_applicationstatus_read' | 'ats_candidate_read' | 'ats_candidate_write' | 'ats_interview_read' | 'ats_interview_write' | 'ats_job_read' | 'ats_job_write' | 'ats_company_read' | 'ats_document_read' | 'ats_document_write' | 'ats_scorecard_read' | 'ats_scorecard_write' | 'crm_company_read' | 'crm_company_write' | 'crm_contact_read' | 'crm_contact_write' | 'crm_deal_read' | 'crm_deal_write' | 'crm_event_read' | 'crm_event_write' | 'crm_lead_read' | 'crm_lead_write' | 'crm_pipeline_read' | 'crm_pipeline_write' | 'martech_list_read' | 'martech_list_write' | 'martech_member_read' | 'martech_member_write' | 'ticketing_customer_read' | 'ticketing_customer_write' | 'ticketing_ticket_read' | 'ticketing_ticket_write' | 'ticketing_note_read' | 'ticketing_note_write' | 'hris_employee_read' | 'hris_employee_write' | 'hris_group_read' | 'hris_group_write' | 'hris_payslip_read' | 'hris_payslip_write' | 'hris_timeoff_read' | 'hris_timeoff_write' | 'hris_company_read' | 'hris_company_write' | 'hris_location_read' | 'hris_location_write' | 'uc_call_read' | 'storage_file_read' | 'storage_file_write' | 'webhook' | 'genai_model_read' | 'genai_prompt_read' | 'genai_prompt_write' | 'messaging_message_read' | 'messaging_message_write' | 'messaging_channel_read' | 'kms_space_read' | 'kms_space_write' | 'kms_page_read' | 'kms_page_write' | 'kms_comment_read' | 'kms_comment_write' | 'task_project_read' | 'task_project_write' | 'task_task_read' | 'task_task_write' )[];
	categories: ( 'passthrough' | 'hris' | 'ats' | 'auth' | 'crm' | 'enrich' | 'martech' | 'ticketing' | 'uc' | 'accounting' | 'storage' | 'commerce' | 'payment' | 'genai' | 'messaging' | 'kms' | 'task' )[]; // The Integration categories that this connection supports
	auth?: {
		token?: string;
		accessToken?: string;
		refreshToken?: string;
		expiryDate?: string; // ISO date
		expiresIn?: number;
		emails?: string[];
		name?: string;
		appId?: string;
		clientId?: string;
		clientSecret?: string;
		consumerKey?: string;
		consumerSecret?: string;
	
		state?: string;
		otherAuthInfo?: string[]; // When integration.auth_type = "other", this field contains the authentication credentials in the same order as token_names
		apiUrl?: string;
		authorizeUrl?: string;
		tokenUrl?: string;
		pem?: string; // the PEM X.509 certificate in Base64 ASCII format
		key?: string; // the private KEY X.509 certificate in Base64 ASCII format
		refreshTokenExpiresIn?: number;
		refreshTokenExpiresDate?: string; // ISO date
		devApiKey?: string;
	}; // An authentication object that represents a specific authorized user's connection to an integration.
	isPaused?: boolean; // Whether this integration has exceed the monthly limit of the plan
	authAwsArn?: string; // the AWS ARN / secretID for the stored auth field
	environment?: string;
	lastHealthyAt?: string; // ISO date
	lastUnhealthyAt?: string; // ISO date
}