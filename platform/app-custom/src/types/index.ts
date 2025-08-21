// platform/app-custom/src/types/index.ts

import { Types as UITypes } from '@ohif/ui';

// Gunakan impor biasa untuk namespace dari @ohif/core
import { HangingProtocol, StudyMetadata, Services } from '@ohif/core';

/**
 * Ini adalah objek 'Types' kustom kita yang sudah lengkap.
 */
const Types = {
  // Semua tipe dari OHIF UI
  ...UITypes,
  // Namespace tipe spesifik dari OHIF Core
  HangingProtocol,
  StudyMetadata,
  Services,
};

export default Types;
