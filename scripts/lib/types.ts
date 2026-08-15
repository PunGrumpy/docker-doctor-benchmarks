export interface ScanResultBase {
  doctorVersion: string;
  githubUrl: string;
  name: string;
  ref: string;
  schemaVersion: number;
  slug: string;
}

export interface ScanResultOk extends ScanResultBase {
  commitSha: string;
  composeFileCount: number;
  dockerfileCount: number;
  errorCount: number;
  errorMessage: null;
  infoCount: number;
  scanElapsedMs: number;
  scannedAt: string;
  score: number;
  scoreLabel: string;
  status: "ok";
  totalDiagnosticCount: number;
  warningCount: number;
}

export interface ScanResultError extends ScanResultBase {
  commitSha: null;
  errorMessage: string;
  scanElapsedMs: number;
  scannedAt: string;
  score: null;
  status: "error";
}

export type ScanResult = ScanResultOk | ScanResultError;

export interface LeaderboardEntry {
  commitSha: string;
  composeFileCount: number;
  dockerfileCount: number;
  errorCount: number;
  githubUrl: string;
  infoCount: number;
  name: string;
  score: number;
  scoreLabel: string;
  slug: string;
  warningCount: number;
}

/** Shape of the JSON report emitted by `@docker-doctor/cli --json`. */
export interface DoctorJsonReport {
  diagnostics: { severity: "error" | "warning" | "info" }[];
  label: string;
  project: {
    composeFiles: string[];
    dockerfiles: string[];
  };
  schemaVersion: number;
  score: number;
}
