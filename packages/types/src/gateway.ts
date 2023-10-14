import type {
  Alert,
  Label,
  Layout,
  LayoutComponent,
  LayoutWithoutComponents,
  LocalFunctionCall,
  NetworkID,
  Report,
  Session,
  Stream,
  Transaction,
  UserSettings,
  VXLHistoryEntry,
} from './api'
import type { SigningRequestCompleted, SigningRequests } from './signing'
import type { TaskState } from './task'

type GatewayBaseEvent<EventName extends Lowercase<string>, Payload> = {
  event_name: EventName
  payload: Payload
}

// Label
export type LabelCreatedEvent = GatewayBaseEvent<'label_created', Label>
export type LabelUpdatedEvent = GatewayBaseEvent<'label_updated', Label>
export type LabelDeletedEvent = GatewayBaseEvent<'label_deleted', Pick<Label, 'id'>>

// Sessions
export type SessionCreatedEvent = GatewayBaseEvent<'session_created', Session>
export type SessionUpdatedEvent = GatewayBaseEvent<'session_updated', Session>
export type SessionDeletedEvent = GatewayBaseEvent<'session_deleted', Pick<Session, 'id'>>

// Signing
export type SigningRequestCreatedEvent = GatewayBaseEvent<'signing_request_created', SigningRequests>
export type SigningRequestCompletedEvent = GatewayBaseEvent<'signing_request_completed', SigningRequestCompleted>

// Transaction
export interface TransactionBroadcasted {
  id: string
  transaction_hash: string
  explorer_url: string
  network_id: NetworkID
}
export type TransactionBroadcastedEvent = GatewayBaseEvent<'transaction_broadcasted', TransactionBroadcasted>
export type TransactionUpdatedEvent = GatewayBaseEvent<'transaction_updated', Transaction>

// Report
export type ReportCreatedEvent = GatewayBaseEvent<'report_created', Report>
export type ReportUpdatedEvent = GatewayBaseEvent<'report_updated', Report>
export type ReportDeletedEvent = GatewayBaseEvent<'report_deleted', Pick<Report, 'id'>>

// Tasks
export type TaskCompletedEvent = GatewayBaseEvent<'task_completed', TaskState>

// Streams
export type StreamCreatedEvent = GatewayBaseEvent<
  'stream_created',
  Pick<Stream, 'id' | 'created_at' | 'updated_at' | 'vxl'>
>
export type StreamUpdatedEvent = GatewayBaseEvent<'stream_updated', Stream & NonNullable<Pick<Stream, 'last_value'>>>
export type StreamPausedEvent = GatewayBaseEvent<'stream_paused', Pick<Stream, 'id'>>
export type StreamResumedEvent = GatewayBaseEvent<'stream_resumed', Pick<Stream, 'id'>>
export type StreamDeletedEvent = GatewayBaseEvent<
  'stream_deleted',
  Required<Pick<Stream, 'id' | 'reason'>> & Pick<Stream, 'error'>
>

// Alerts
export type AlertCreatedEvent = GatewayBaseEvent<'alert_created', Alert>
export type AlertUpdatedEvent = GatewayBaseEvent<'alert_created', Alert>
export type AlertDeletedEvent = GatewayBaseEvent<'alert_created', Pick<Alert, 'id'>>
export type AlertTriggeredEvent = GatewayBaseEvent<'alert_created', Alert>
export type LocalFunctionCalledEvent = GatewayBaseEvent<'local_function_called', LocalFunctionCall>

// History
export type VXLHistoryEntryCreatedEvent = GatewayBaseEvent<'vxl_history_entry_created', VXLHistoryEntry>
export type VXLHistoryEntryDeletedEvent = GatewayBaseEvent<'vxl_history_entry_deleted', Pick<VXLHistoryEntry, 'id'>>
export type VXLHistoryDeletedEvent = GatewayBaseEvent<'vxl_history_deleted', undefined>

// User Settings
export type UserSettingsUpdatedEvent = GatewayBaseEvent<'user_settings_updated', UserSettings>

// Layouts
export type LayoutCreatedEvent = GatewayBaseEvent<'layout_created', LayoutWithoutComponents>
export type LayoutOpenedEvent = GatewayBaseEvent<'layout_opened', Layout>
export type LayoutUpdatedEvent = GatewayBaseEvent<'layout_updated', LayoutWithoutComponents>
export type LayoutDeletedEvent = GatewayBaseEvent<'layout_deleted', Pick<Layout, 'id'>>

// Layout Components
export type LayoutComponentAddedEvent = GatewayBaseEvent<'component_added', LayoutComponent>
export type LayoutComponentUpdatedEvent = GatewayBaseEvent<'component_updated', LayoutComponent>
export type LayoutComponentIndexesUpdatedEvent = GatewayBaseEvent<
  'component_indexes_updated',
  { id: string; index: number }[]
>
export type LayoutComponentDeletedEvent = GatewayBaseEvent<'component_deleted', Pick<LayoutComponent, 'id'>>

export type GatewayEvent =
  | AlertCreatedEvent
  | AlertDeletedEvent
  | AlertTriggeredEvent
  | AlertUpdatedEvent
  | LabelCreatedEvent
  | LabelDeletedEvent
  | LabelUpdatedEvent
  | LayoutComponentAddedEvent
  | LayoutComponentDeletedEvent
  | LayoutComponentIndexesUpdatedEvent
  | LayoutComponentUpdatedEvent
  | LayoutCreatedEvent
  | LayoutDeletedEvent
  | LayoutOpenedEvent
  | LayoutUpdatedEvent
  | LocalFunctionCalledEvent
  | ReportCreatedEvent
  | ReportDeletedEvent
  | ReportUpdatedEvent
  | SessionCreatedEvent
  | SessionDeletedEvent
  | SessionUpdatedEvent
  | SigningRequestCompletedEvent
  | SigningRequestCreatedEvent
  | StreamCreatedEvent
  | StreamDeletedEvent
  | StreamPausedEvent
  | StreamResumedEvent
  | StreamUpdatedEvent
  | TaskCompletedEvent
  | TransactionBroadcastedEvent
  | TransactionUpdatedEvent
  | UserSettingsUpdatedEvent
  | VXLHistoryDeletedEvent
  | VXLHistoryEntryCreatedEvent
  | VXLHistoryEntryDeletedEvent

export type GatewayEventName = GatewayEvent['event_name']
